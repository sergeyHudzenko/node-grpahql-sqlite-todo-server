import jsonwebtoken from 'jsonwebtoken';
import db from '../../../database/connection.js';
import encrypt from '../../utils/cryptPassword.js';

class UserLib {
  static async getUserById(id) {
    const sql = `SELECT * FROM users WHERE id = ${id}`;
    const result = new Promise((resolve, reject) => {
      db.get(sql, [], (err, row) => {
        if (err) {
          console.error(`Get User By Id | Error: ${err.message}`);
          reject(err.message);
        }

        resolve(row);
      });
    });

    return await result;
  }

  static async getAllUsers() {
    const sql = 'SELECT * FROM users';
    const result = new Promise((resolve, reject) => {
      db.all(sql, [], (err, row) => {
        if (err) {
          console.error(`Get All User | Error: ${err.message}`);
          reject(err.message);
        }

        resolve({ users: row });
      });
    });

    return await result;
  }

  static async createUser({ name, email, password }) {
    const sql = 'INSERT INTO users (name, email, password) VALUES(?,?,?) RETURNING *';
    const encryptedPwd = await encrypt.cryptPassword(password);
    const result = new Promise((resolve, reject) => {
      db.get(sql, [name, email, encryptedPwd], (err, row) => {
        if (err) {
          console.error(`Create user | Error: ${err.message}`);
          reject(err.message);
        }

        resolve(row);
      });
    });

    return await result;
  }

  static async loginUser({ email, password }) {
    const sql = `SELECT * FROM users WHERE email = "${email}"`;
    const user = new Promise((resolve, reject) => {
      db.get(sql, [], (err, row) => {
        if (err) {
          console.error(`Login | Error: ${err.message}`);
          reject(err.message);
        }

        resolve(row);
      });
    });

    const result = await user;

    if (!result) throw Error('No user with that email');

    const comparedPwd = await encrypt.comparePassword(password, await result?.password);

    if (comparedPwd) {
      console.log({
        userId: await result.id,
        token: jsonwebtoken.sign(
          result,
          process.env.JWT_SECRET,
          { expiresIn: '1d' },
        ),
      });
      return {
        userId: await result.id,
        token: jsonwebtoken.sign(
          result,
          process.env.JWT_SECRET,
          { expiresIn: '1d' },
        ),
      };
    }

    throw Error('Wrong login or password');
  }
}

export default UserLib;
