import classNames from "classnames";
import classes from "./content-container.module.less";

const ContentContainer = (props) => {
  return (
    <div
      className={classNames([
        classes.content_container,
        ...(props.classNames || []),
      ])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
export default ContentContainer;
