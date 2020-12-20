import tw, { styled } from 'twin.macro';
const StyledButton = styled.button(() => [
    tw `text-lg px-8 py-2 rounded focus:outline-none`,
    tw `bg-green-500 text-green-50 shadow-sm hover:shadow-lg`
]);
export const Button = ({ children }) => {
    return <StyledButton>{children}</StyledButton>;
};
