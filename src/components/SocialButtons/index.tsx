import { ClickableIcon } from "@components/Buttons/Icon";
import { AlignCenter } from "@styles/Common";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <AlignCenter css={{ margin: "16px 0", "@phone": { marginBottom: "24px" } }}>
      <ClickableIcon
        as="a"
        href="https://www.linkedin.com/in/rajatkulkarni95/"
        icon={<FaLinkedin aria-hidden="true" />}
        tooltip="LinkedIn"
      />
      <ClickableIcon
        as="a"
        href="https://github.com/rajatkulkarni95"
        icon={<FaGithub />}
        tooltip="Github"
        spacing="md"
      />
      <ClickableIcon
        as="a"
        href="https://twitter.com/JokingRajat"
        icon={<FaTwitter />}
        tooltip="Twitter"
      />
    </AlignCenter>
  );
};

export default SocialButtons;
