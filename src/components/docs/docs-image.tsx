import Image, { type ImageProps } from "next/image";

export type DocsImageProps = Pick<
  ImageProps,
  "src" | "alt" | "width" | "height" | "className"
> & {
  caption?: string;
};

export function DocsImage({
  src,
  alt,
  width,
  height,
  caption,
  className,
}: DocsImageProps) {
  if (!alt.trim()) {
    throw new Error("DocsImage requires descriptive alt text.");
  }

  return (
    <figure className="docs-image">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
