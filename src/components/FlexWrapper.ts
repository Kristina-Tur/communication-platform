import styled from 'styled-components';
import {CSSProperties} from 'react';

type FlexWrapperPropsType = {
    flexDirection?: CSSProperties['flexDirection'] //вместо string, тогда свойства будут подсказываться
    /*flexDirection?: string*/
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-wrap: ${props => props.flexWrap || 'no-wrap'};
  gap: ${props => props.gap || undefined};
`
