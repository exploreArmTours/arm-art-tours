import { ReactNode } from 'react';

export enum TextStyle {
  Header1,
  Header2,
  Header3,
  Header4,
  BodyXsMedium,
  BodyXsSemibold,
  BodySmNormal,
  BodySmMedium,
  BodySmSemibold,
  BodyBaseNormal,
  BodyBaseMedium,
  BodyBaseSemibold,
  BodyMdBold,
  BodyMdNormal,
  BodyLgNormal,
  BodyLgSemiBold,
  BodyLgBold,
  Body2xlSemiBold,
  BodyXlNormal,
  BodyXlSemiBold,
  BodyXlBold,
  Body2xlBold,
  BodySmallRegular,
}
type TextSegment = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

type TextProps = {
  style: TextStyle;
  value: string | number | TextSegment[] | ReactNode;
  className?: string;
};

export const Text = ({ style, value, className }: TextProps) => {
  let styleClass = className ? `${className} ` : '';
  switch (style) {
    case TextStyle.Header1:
      styleClass += 'text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold';
      break;
    // case TextStyle.Header1:
    //   styleClass +=
    //     'text-3xl/[150%] xl:text-4xl/[150%] 2xl:text-5xl/[150%] 3xl:text-6xl/[150%] font-bold';
    //   break;
    case TextStyle.Header2:
      styleClass +=
        'text-2xl/[150%] md:text-3xl/[150%] 2xl:text-4xl/[150%] font-bold';
      break;
    case TextStyle.Header3:
      styleClass += 'text-lg/[25.2px] font-normal';
      break;
    case TextStyle.Header4:
      styleClass += 'text-[34px]/[150%] font-bold';
      break;
    case TextStyle.BodyXsMedium:
      styleClass += 'text-xs font-medium';
      break;
    case TextStyle.BodyXsSemibold:
      styleClass += 'text-xs font-semibold';
      break;
    case TextStyle.BodySmNormal:
      styleClass += 'text-sm/[22.4px] font-normal';
      break;
    case TextStyle.BodySmMedium:
      styleClass += 'text-sm/[22.4px] font-medium';
      break;
    case TextStyle.BodySmSemibold:
      styleClass += 'text-sm/[22.4px] font-semibold';
      break;
    case TextStyle.BodyBaseNormal:
      styleClass += 'text-base/[150%] font-normal';
      break;
    case TextStyle.BodyBaseMedium:
      styleClass += 'text-base/[150%] font-medium';
      break;

    case TextStyle.BodyBaseSemibold:
      styleClass += 'text-base/[150%] font-semibold';
      break;

    case TextStyle.BodyXlNormal:
      styleClass += 'text-base md:text-xl font-normal';
      break;
    case TextStyle.BodyXlSemiBold:
      styleClass += 'text-base md:text-xl font-semibold';
      break;
    case TextStyle.BodyXlBold:
      styleClass += 'text-base md:text-xl font-bold';
      break;

    case TextStyle.BodyLgSemiBold:
      styleClass += 'text-base md:text-lg font-semibold';
      break;
    case TextStyle.BodyLgBold:
      styleClass += 'text-base md:text-lg font-bold';
      break;
    case TextStyle.BodyLgNormal:
      styleClass += 'text-base md:text-lg font-normal';
      break;

    case TextStyle.BodyBaseSemibold:
      styleClass += 'text-base/[150%] font-semibold';
      break;
    case TextStyle.BodyMdBold:
      styleClass += 'text-[18px] font-bold';
      break;
    case TextStyle.BodyMdNormal:
      styleClass += 'text-[18px] font-normal';
      break;
    case TextStyle.Body2xlBold:
      styleClass += 'text-2xl font-bold';
      break;
    case TextStyle.BodySmallRegular:
      styleClass += 'text-xs/[20px]';
      break;
  }
  return (
    <div className={styleClass}>
      {typeof value === 'string' || typeof value === 'number'
        ? value
        : Array.isArray(value) &&
          value.map((segment: TextSegment, index: number) => (
            <span
              key={index}
              className={segment.className}
              style={segment.style}>
              {segment.text}
            </span>
          ))}
    </div>
  );
};
