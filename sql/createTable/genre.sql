create table genre(
    id int primary key auto_increment,
    name varchar(255) not null,
    description text
) ENGINE = InnoDB
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_general_ci;