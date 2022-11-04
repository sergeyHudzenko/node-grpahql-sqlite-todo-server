import db from '../../../database/connection.js';

class TodoLib {
  static async getTodosByUser(id) {
    const sql = `SELECT * FROM todos WHERE userId = ${id}`;
    const result = new Promise((resolve, reject) => {
      db.all(sql, [], (err, row) => {
        if (err) {
          console.error(`Get Todos By User | Error: ${err.message}`);
          reject(err.message);
        }

        resolve({ todos: row });
      });
    });

    return await result;
  }

  static async getTodosByStatus(id, status) {
    const sql = `SELECT * FROM todos WHERE userId = ${id} AND status = "${status}"`;
    const result = new Promise((resolve, reject) => {
      db.all(sql, [], (err, row) => {
        if (err) {
          console.error(`Get Todos By User | Error: ${err.message}`);
          reject(err.message);
        }

        resolve({ todos: row });
      });
    });

    return await result;
  }

  static async addTodo({ userId, title }) {
    const sql = 'INSERT INTO todos (userId, title, status) VALUES(?,?,?) RETURNING *';

    const result = new Promise((resolve, reject) => {
      db.get(sql, [userId, title, 'incompleted'], (err, row) => {
        if (err) {
          console.error(`Add todo | Error: ${err.message}`);
          reject(err.message);
        }

        resolve(row);
      });
    });

    return await result;
  }

  static async removeTodo({ id }) {
    const sql = `DELETE FROM todos WHERE id = ${id}`;
    const result = new Promise((resolve, reject) => {
      db.run(sql, [], (err) => {
        if (err) {
          console.error(`Remove todo | Error: ${err.message}`);
          reject(err.message);
        }

        resolve(true);
      });
    });

    return await result || false;
  }

  static async changeTodoStatus({ id, status }) {
    const sql = 'UPDATE todos SET status = ? WHERE id = ?  RETURNING *';

    const result = new Promise((resolve, reject) => {
      db.get(sql, [status, id], (err, row) => {
        if (err) {
          console.error(`Change todo's status| Error: ${err.message}`);
          reject(err.message);
        }

        resolve(row);
      });
    });

    return await result;
  }
}

export default TodoLib;
