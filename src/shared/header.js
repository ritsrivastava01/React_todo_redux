import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark p-3">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Link href="/">
        <a className="pr-2">Home</a>
      </Link>

      <Link href="/todoList">
        <a>Todo List</a>
      </Link>

      <Navbar.Collapse className="justify-content-end">
        <Link href="/">
          <a href="#login">Login</a>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
