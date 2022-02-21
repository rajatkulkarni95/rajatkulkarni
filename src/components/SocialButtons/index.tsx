import { ClickableIcon, LinkButton } from "@components/Buttons/Icon";
import { AlignCenter } from "@styles/Common";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <AlignCenter
      css={{ margin: "16px 8px", "@phone": { margin: "0 0 24px 0" } }}
    >
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
      <LinkButton href="https://read.cv/rajatk" css={{ marginLeft: "8px" }}>
        Read CV
      </LinkButton>
    </AlignCenter>
  );
};

export default SocialButtons;
