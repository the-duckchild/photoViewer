import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';
import { getImageUrls } from './largeimage/getImageUrls';
import { PhotoViewer } from './largeimage/largeImage';


test('renders App heading text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/);
  expect(textElement).toBeVisible();
});


test('renders urls and ignores broken urls', () =>{
    //Arrange
    const firstUrl = "https://picsum.photos/id/600/700/500.jpg";
    const brokenUrls = ["https://picsum.photos/id/601/700/500.jpg", "https://picsum.photos/id/624/700/500.jpg"]

    //Act
    const imageUrls = getImageUrls();

    //assert
    expect(firstUrl).toBe(imageUrls[0]);
    expect(imageUrls).toEqual(expect.not.arrayContaining(brokenUrls));
});

describe ("Photoviewer", () => {

    it("Should match snapshot when given src string", async () => {
        const component = render(<PhotoViewer src="https://picsum.photos/id/600/700/500.jpg"/>)
        
        expect(component).toMatchSnapshot();
    })

    
}
)


