create table book(
    id int primary key auto_increment,
    title varchar(255) not null,
    author varchar(255) not null,
    description text,
    genre int not null,
    image varchar(255),
    foreign key (genre) references genre(id)
) ENGINE = InnoDB
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_general_ci;