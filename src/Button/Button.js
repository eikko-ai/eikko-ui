import { h } from 'preact';
import tw, { styled } from 'twin.macro';
const StyledButton = styled.button(() => [
    tw `text-lg px-8 py-2 rounded focus:outline-none`,
    tw `transform transition-transform duration-75`
]);
export const Button = ({ children, variant }) => {
    return h(StyledButton, null, children);
};
