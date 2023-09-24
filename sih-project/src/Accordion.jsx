
import React,{Component} from "react";


class Accordion extends Component {
    constructor(props) {
      super(props);
      this.state = {
        accordionItems: [],
      };
    }
  
    componentDidMount() {
      const accordion = data.map((item) => ({
        title: item.title,
        content: item.content,
        open: false,
      }));
  
      this.setState({
        accordionItems: accordion,
      });
    }
  
    click(item) {
      const newAccordion = this.state.accordionItems.slice();
      const index = newAccordion.indexOf(item);
      newAccordion[index].open = !newAccordion[index].open;
      this.setState({ accordionItems: newAccordion });
    }
  
    render() {
      return (
        <div className="accordion">
          {this.state.accordionItems.map((item, index) => (
            <div key={index}>
              <div className="title" onClick={() => this.click(item)}>
                <div className="arrow-wrapper">
                  <span className="arrow-text">{item.open ? "-" : "+"}</span>
                </div>
                <span className="title-text">{item.title}</span>
              </div>
              <div className={item.open ? "content content-open" : "content"}>
                <div
                  className={
                    item.open ? "content-text content-text-open" : "content-text"
                  }
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
  



      const data = [
        {
          title: "Can a child’s temperament affect one’s behaviour? ",
          content: `Yes, a child’s temperament, like being easygoing or spirited, plays a significant role in their behavior. Easy-going children may adapt well, while spirited ones may display more intense reactions.
          `, // Add your content here
        },
        {
          title:
            "Is the (name) designed only for children or can it be played by adults as well?",
          content: `Yes, this game can be played by young adults as well. Though in that case, we cannot be sure about the reliability of the analysis report, as adults are seen to be more smart and thoughtful with their answers. While children are observed to be immersed in the game and let their subconscious behavioural pattern select the answers for them.
          `, // Add your content here
        },
        {
          title: "Three",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
        {
          title: "Four",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
        {
          title: "Five",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
        {
          title: "Six",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
        {
          title: "Seven",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
        {
          title: "Eight",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
        {
          title: "Nine",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
        {
          title: "Ten",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
          `, // Add your content here
        },
      ];


      export default Accordion;