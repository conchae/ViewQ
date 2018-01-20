import { Component, h } from "preact";
import { getCatalog, getThread } from "../api";
import Post from "./post";

export default class Thread extends Component {
  constructor(props) {
    super(props);

    this.scrollListener = () => {
      if (innerHeight + scrollY >= document.body.offsetHeight) {
        this.setState((prevState, props) => ({
          loadLimit: prevState.loadLimit + 10
        }));
      }
    };
  }

  async componentDidMount() {
    const thread = await getThread(this.props.board, this.props.number);
    this.setState({
      thread,
      loadLimit: 10
    });

    addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.scrollListener);
  }

  render({ matches }, { thread = [], loadLimit }) {
    return (
      <div class="thread">
        {thread
          .slice(0, loadLimit)
          .map(post => <Post post={post} matches={matches} />)}
      </div>
    );
  }
}