import Button from "./Button";

export default function JoinButton(props) {
  return (
    <Button
      tagName="a"
      target="_blank"
      href="https://docs.google.com/forms/d/1Q6G2WtbGd-Yqa0_qZMgsY31BFH2PBpaQlrO1FnlQmeE/edit?chromeless=1"
      {...props}
    />
  );
}
