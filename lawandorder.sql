SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `lawandorder` (
  `lawid` int(16) NOT NULL,
  `category` enum('Murder','Robbery') NOT NULL,
  `para` varchar(10) NOT NULL,
  `legaltitle` varchar(50) NOT NULL,
  `legaltext` varchar(2000) NOT NULL,
  `minsentence` varchar(100) NOT NULL,
  `maxsentence` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `lawandorder`
  ADD PRIMARY KEY (`lawid`);


ALTER TABLE `lawandorder`
  MODIFY `lawid` int(16) NOT NULL AUTO_INCREMENT;
COMMIT;