import React from "react";
import { Row, Col } from "react-bootstrap";

import { ReactComponent as CLanguage } from "../../media/icons-misc/c.svg";
import { ReactComponent as CPlusPlus } from "../../media/icons-misc/cpp.svg";
import { ReactComponent as D3 } from "../../media/icons-misc2/d3.svg";
import { ReactComponent as Python } from "../../media/icons-misc/python.svg";
import { ReactComponent as Php } from "../../media/icons-misc/php.svg";
import { ReactComponent as PhpElephant } from "../../media/icons/php_elephant.svg";

import { ReactComponent as Mongo } from "../../media/icons-misc2/mongo.svg";

import { ReactComponent as Graphql } from "../../media/icons-misc/graphql.svg";

import { ReactComponent as SQL } from "../../media/icons-misc2/sql-svgrepo-com.svg";

import { ReactComponent as GoLang } from "../../media/icons-misc/go.svg";
import { ReactComponent as GoGopher } from "../../media/icons-misc2/goGopher.svg";
import { ReactComponent as Git } from "../../media/icons-misc/git.svg";

import { ReactComponent as Heroku } from "../../media/icons-misc/heroku.svg";
import { ReactComponent as Netlify } from "../../media/icons-misc/netlify.svg";
import { ReactComponent as Firebase } from "../../media/icons-misc/firebase.svg";

//
export default function Misc() {
  return (
    <div>
      <Row>
        <Col sm={1}>
          <D3 width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <GoGopher width="80%" height="auto" />
        </Col>
        <Col sm={1}>
          <Python width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <PhpElephant width="4em" height="auto" />
        </Col>
        <Col sm={1}>
          <Mongo width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <Graphql width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <SQL width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <Git width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <Heroku width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <Netlify width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <Firebase width="auto" height="auto" />
        </Col>
        <Col sm={1}>
          <CLanguage width="auto" height="auto" />
        </Col>
      </Row>
    </div>
  );
}
