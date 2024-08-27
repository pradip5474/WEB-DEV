CREATE DATABASE college;
USE	 college;
CREATE table college(ROll_no int,name varchar(30),age int);

INSERT INTO college VALUES (101,"adams",12),(102,"bob",14);
SELECT * FROM college;

CREATE DATABASE INSTAGRAM;
USE  INSTAGRAM;
CREATE TABLE USER(
  ID int,
  age int,
  Name char(30) unique,
  email varchar(50) not null,
  followers int default 0,
  following int ,
  CONSTRAINT  CHECK(age>13),
  primary key(ID)
);

SELECT * FROM user;

INSERT INTO USER(id,age,Name,email,followers,following)
VALUES(1,14,"adam","adam@yehoo.in",123,145),
(2,15,"bob","bobo123@gmail.com",200,200),
(3,16,"casey","casey@gmail.com",300,306),
(4,17,"donald","donald@gmail.com",200,105);
INSERT INTO USER(id,age,Name,email,followers,following)
VALUES(5,14,"samke","sankeyt@yehoo.in",123,145),
(6,15,"don","don@gmail.com",200,200);

select NAME,FOLLOWERS FROM USER WHERE followers>=200;
select NAME,AGE FROM USER WHERE AGE>=15;

update user set followers=222
where age=16;


SET SQL_SAFE_UPDATES=0;


create table post(
  id int primary key,
  content varchar(159),
  user_id int,
  foreign key (user_id) references user(ID) 
);

INSERT INTO post(id,content,user_id)
VALUES(101,"Hello World",3),
(102,"bye bye",1),
(103,"hello delta",3);

SELECT * from post;












