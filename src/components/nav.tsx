import { A } from "solid-start";
function Nav() {
    return (
      <header class="header">
        <nav class="inner">
          <A href="/">
            <strong>Home</strong>
          </A>
          <A href="/about">
            <strong>About</strong>
          </A>
          <A href="/travel">
            <strong>Travel</strong>
          </A>
          <A href="/blog">
            <strong>Blog</strong>
          </A>
          <A href="/resume">
            <strong>Resume</strong>
          </A>
        </nav>
      </header>
    );
  }
  export default Nav;