-- seodb.booktags definition

CREATE TABLE `booktags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `tag` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `booktags_UN` (`book`,`tag`),
  KEY `tag` (`tag`),
  CONSTRAINT `booktags_FK` FOREIGN KEY (`book`) REFERENCES `book` (`isbn`),
  CONSTRAINT `booktags_ibfk_2` FOREIGN KEY (`tag`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;