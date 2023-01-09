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
  const [User, setUser] = useState({});

  // delete function
  const OnDelete = (login) => {
    setData(Data.filter((i) => i.login !== login));
  };
  // add function
  const OnChange = ({ target: { value, name } }) => {
    let res = { ...User, [name]: value };
    setUser(res);
  };

  const OnAdd = () => {
    let size = Object.keys(User).length;
    if (size == 0) {
    } else {
      let res = [...Data, User];
      setData(res);
    }
  };

  return (
    <>
      <Container>
        {" "}
        <Table>
          <thead>
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
          </thead>
          <tbody>
            <TableR>
              <TableD>
                <Inputs onChange={OnChange} type={"number"} name="id"></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  onChange={OnChange}
                  type={"text"}
                  user
                  name="username"
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  onChange={OnChange}
                  type={"email"}
                  email
                  name="email"
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  onChange={OnChange}
                  type={"number"}
                  ip
                  name="ip"
                ></Inputs>
              </TableD>
              <TableD>
                <Inputs onChange={OnChange} time name="time"></Inputs>
              </TableD>
              <TableD>
                <Inputs onChange={OnChange} login name="login"></Inputs>
              </TableD>
              <TableD>
                <Inputs
                  onChange={OnChange}
                  confirmation
                  name="confirmation"
                ></Inputs>
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
                <TableR key={v.id}>
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
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Hooks;
