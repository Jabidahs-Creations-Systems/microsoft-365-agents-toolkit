import "./codeSnippet.scss";

import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Icon } from "@fluentui/react";

import {
  TelemetryEvent,
  TelemetryProperty,
  TelemetryTriggerFrom,
} from "../../../telemetry/extTelemetryEvents";
import { Commands } from "../../Commands";

export default function CodeSnippet(props: {
  data: string;
  language: string;
  theme: string;
  identifier: string;
}) {
  const [copied, setCopied] = React.useState(false);

  // Replace null characters with a visible symbol to prevent clipboard corruption
  const safeText = React.useMemo(() => props.data.replace(/\u0000/g, '\u25A1'), [props.data]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  const onCopyCode = () => {
    vscode.postMessage({
      command: Commands.SendTelemetryEvent,
      data: {
        eventName: TelemetryEvent.CopyCodeSnippet,
        properties: {
          [TelemetryProperty.TriggerFrom]: TelemetryTriggerFrom.InProductDoc,
          [TelemetryProperty.Identifier]: props.identifier,
        },
      },
    });
    setCopied(true);
  };

  let copyButton;
  if (copied) {
    copyButton = (
      <div className="copiedButton">
        <Icon iconName="CheckMark" />
      </div>
    );
  } else {
    copyButton = (
      <div className="copyButton">
        <Icon iconName="Copy" />
        <button>Copy</button>
      </div>
    );
  }

  return (
    <div className="codeSnippet">
      <div className="codeTitle">
        <CopyToClipboard text={safeText} onCopy={onCopyCode}>
          {copyButton}
        </CopyToClipboard>
      </div>
      <div>
        <SyntaxHighlighter
          language={props.language}
          style={props.theme === "light" ? lightfair : dark}
          className="codeBlock"
        >
          {props.data}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
