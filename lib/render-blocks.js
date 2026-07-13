import React from "react";

function renderMarks(node, key) {
  let el = node.text;
  if (node.code) el = <code key={`${key}-code`}>{el}</code>;
  if (node.bold) el = <strong key={`${key}-b`}>{el}</strong>;
  if (node.italic) el = <em key={`${key}-i`}>{el}</em>;
  if (node.underline) el = <u key={`${key}-u`}>{el}</u>;
  if (node.strikethrough) el = <s key={`${key}-s`}>{el}</s>;
  return <React.Fragment key={key}>{el}</React.Fragment>;
}

function renderChildren(children = []) {
  return children.map((child, i) => {
    if (child.type === "text") return renderMarks(child, i);
    if (child.type === "link") {
      return (
        <a key={i} href={child.url} target="_blank" rel="noopener noreferrer">
          {renderChildren(child.children)}
        </a>
      );
    }
    return null;
  });
}

const HEADING_TAGS = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" };

export function renderBlocks(blocks) {
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block, i) => {
    switch (block.type) {
      case "heading": {
        const Tag = HEADING_TAGS[block.level] || "h2";
        return <Tag key={i}>{renderChildren(block.children)}</Tag>;
      }
      case "paragraph":
        return <p key={i}>{renderChildren(block.children)}</p>;
      case "quote":
        return <blockquote key={i}>{renderChildren(block.children)}</blockquote>;
      case "code":
        return (
          <pre key={i}>
            <code>{block.children?.map((c) => c.text).join("\n")}</code>
          </pre>
        );
      case "list": {
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={i}>
            {block.children?.map((item, j) => (
              <li key={j}>{renderChildren(item.children)}</li>
            ))}
          </ListTag>
        );
      }
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={block.image?.url}
            alt={block.image?.alternativeText || ""}
            width={block.image?.width}
            height={block.image?.height}
          />
        );
      default:
        return null;
    }
  });
}

// Plain-text extraction, used for reading-time estimates and excerpts
// when content is Strapi Blocks JSON rather than a markdown string.
export function blocksToPlainText(blocks) {
  if (!Array.isArray(blocks)) return "";
  const walk = (nodes = []) =>
    nodes
      .map((n) => {
        if (n.text !== undefined) return n.text;
        if (n.children) return walk(n.children);
        return "";
      })
      .join(" ");
  return blocks.map((b) => walk(b.children)).join(" ");
}
