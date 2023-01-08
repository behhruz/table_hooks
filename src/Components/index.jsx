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
              <Inputs></Inputs>
            </TableD>
            <TableD>
              <Inputs user></Inputs>
            </TableD>
            <TableD>
              <Inputs email></Inputs>
            </TableD>
            <TableD>
              <Inputs ip></Inputs>
            </TableD>
            <TableD>
              <Inputs time></Inputs>
            </TableD>
            <TableD>
              <Inputs login></Inputs>
            </TableD>
            <TableD>
              <Inputs confirmation></Inputs>
            </TableD>
            <TableD>
              <Inputs status></Inputs>
            </TableD>
            <TableD>
              <Button>Add</Button>
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
                    <Image src={Images3} />
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
