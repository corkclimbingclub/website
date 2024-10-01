import Button from "./Button";

export default function JoinButton(props) {
  return (
    <Button
      tagName="a"
      href="/become-member"
      {...props}
    />
  );
}
