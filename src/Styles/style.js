import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;

const Table = styled.table`
  width: 1140px;
  border: 1px solid #eceeef;
`;

const TableR = styled.tr``;
const TableH = styled.th`
  border: 1px solid #eceeef;
  width: 15px;
  color: #337ab7;
  font-size: 14px;
`;
const TableD = styled.td`
  border: 1px solid #eceeef;
  text-align: center;
  color: ${({ confirmed }) => confirmed && "#3C763D"};
`;
const Inputs = styled.input`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 34px;
  height: 25px;
  width: ${({ user }) => user && "164px"};
  width: ${({ email }) => email && "231px"};
  width: ${({ ip }) => ip && "98px"};
  width: ${({ time }) => time && "119px"};
  width: ${({ login }) => login && "107px"};
  width: ${({ confirmation }) => confirmation && "88px"};
  width: ${({ status }) => status && "85px"};
`;
const Button = styled.button`
  background-color: #d9534f;
  border: 1px solid #d9534f;
  border-radius: 4px;
  width: 76px;
  height: 22px;
  color: white;
  &:active {
    transform: scale(0.9);
  }
`;
const Image = styled.img`
  width: 13px;
  height: 13px;
  margin: 0 2px;
  &:active {
    transform: scale(0.9);
  }
`;
export { Table, TableD, TableR, Container, TableH, Inputs, Button, Image };
