import { MarkdownText } from "@/components/markdown-text";

export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((paragraph) => (
        <p key={paragraph} className="mt-4 first:mt-0">
          <MarkdownText text={paragraph} />
        </p>
      ))}
    </>
  );
}
