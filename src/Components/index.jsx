import React from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Image,
  Inputs,
  Table,
  TableD,
  TableH,
  TableR,
} from "../Styles/style";
import Dataes from "../Utilities/mini_Backend";
import Images from "../Assets/Person.png";
import Images1 from "../Assets/Email.png";
import Images2 from "../Assets/Pencil.png";
import Images3 from "../Assets/Container.png";

const Hooks = () => {
  const [Data, setData] = useState(Dataes);
  const [User, setUser] = useState("");
  const [User1, setUser1] = useState("");
  const [User2, setUser2] = useState("");
  const [User3, setUser3] = useState("");
  const [User4, setUser4] = useState("");
  const [User5, setUser5] = useState("");
  const [User6, setUser6] = useState("");

  // delete function
  const OnDelete = (login) => {
    setData(Data.filter((i) => i.login !== login));
  };

  // add function
  const OnChange = ({ target: { value } }) => {
    setUser(value);
  };
  const OnChange1 = ({ target: { value } }) => {
    setUser1(value);
  };
  const OnChange2 = ({ target: { value } }) => {
    setUser2(value);
  };
  const OnChange3 = ({ target: { value } }) => {
    setUser3(value);
  };
  const OnChange4 = ({ target: { value } }) => {
    setUser4(value);
  };
  const OnChange5 = ({ target: { value } }) => {
    setUser5(value);
  };
  const OnChange6 = ({ target: { value } }) => {
    setUser6(value);
  };
  const OnAdd = () => {
    setData(
      [
        ...Data,
        {
          id: User,
          username: User1,
          email: User2,
          ip: User3,
          time: User4,
          login: User5,
          confirmation: User6,
        },
      ],
      {
        User: "",
        User1: "",
        User2: "",
        User3: "",
        User4: "",
        User5: "",
        User6: "",
      }
    );
  };
  //  const onAdd = () => {
  //       this.setState({ User: [...this.state.User, { model: this.state.text }],
  //       text:"" });
  //     };
  console.log(Data, "ddd");
  return (
    <>
      <Container>
        {" "}
        <Table>
          <TableR>
            <TableH>Id</TableH>
            <TableH>Username</TableH>
            <TableH>Email</TableH>
            <TableH>Registration ip</TableH>
            <TableH>Registration Time</TableH>
            <TableH>Last Login</TableH>
            <TableH>Confirmation</TableH>
            <TableH>Block Status</TableH>
            <TableH></TableH>
          </TableR>
          <TableR>
            <TableD>
              <Inputs onChange={OnChange} type={"number"}></Inputs>
            </TableD>
            <TableD>
              <Inputs onChange={OnChange1} type={"text"} user></Inputs>
            </TableD>
            <TableD>
              <Inputs onChange={OnChange2} type={"email"} email></Inputs>
            </TableD>
            <TableD>
              <Inputs onChange={OnChange3} type={"number"} ip></Inputs>
            </TableD>
            <TableD>
              <Inputs onChange={OnChange4} time></Inputs>
            </TableD>
            <TableD>
              <Inputs onChange={OnChange5} login></Inputs>
            </TableD>
            <TableD>
              <Inputs onChange={OnChange6} confirmation></Inputs>
            </TableD>
            <TableD>
              <Inputs status></Inputs>
            </TableD>
            <TableD>
              <Button onClick={OnAdd}>Add</Button>
            </TableD>
          </TableR>
          {Data.map((v) => {
            return (
              <>
                <TableR>
                  <TableD>{v.id}</TableD>
                  <TableD>{v.username}</TableD>
                  <TableD>{v.email}</TableD>
                  <TableD>{v.ip}</TableD>
                  <TableD>{v.time}</TableD>
                  <TableD>{v.login}</TableD>
                  <TableD confirmed>{v.confirmation}</TableD>
                  <TableD>
                    <Button>Block</Button>
                  </TableD>
                  <TableD>
                    <Image src={Images} />
                    <Image src={Images1} />
                    <Image src={Images2} />
                    <Image onClick={() => OnDelete(v.login)} src={Images3} />
                  </TableD>
                </TableR>
              </>
            );
          })}
        </Table>
      </Container>
    </>
  );
};

export default Hooks;
