<<<<<<< HEAD
import qs from "querystring";
import dbSet from "../mysql/mysql_connect.js";

function reqOnData(chunk, query, callback) {
  let body = "";
=======
import qs from 'querystring'
import dbSet from '../mysql/mysql_connect.js'
import fs from 'fs';

function reqOnData(chunk, query, callback) {
  let body = '';
>>>>>>> 43-2
  body += chunk;
  let postArray = [];
  let post = qs.parse(body);
  console.log(post);
  for (let i in post) {
    postArray.push(post[i]);
  }
  console.log(postArray);
  dbSet.connect();
  dbSet.query(query, postArray, (err) => {
    if (err) {
      console.error("쿼리실행 실패", err);
    } else {
      console.log("쿼리실행성공");
    }
<<<<<<< HEAD
  });
  dbSet.end();
=======
  })
>>>>>>> 43-2
  if(callback){
    callback(dbSet);
  }
}

export default reqOnData;
