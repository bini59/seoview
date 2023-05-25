create table booktags(
    id int primary key auto_increment,
    book int not null,
    tag int not null,
    foreign key (book) references book(id),
    foreign key (tag) references tag(id)
) ENGINE = InnoDB
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_general_ci;