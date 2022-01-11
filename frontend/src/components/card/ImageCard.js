import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import CardImage from "@material-tailwind/react/CardImage";

const colors = {
  blueGray: "bg-blue-gray-500",
  gray: "bg-gray-500",
  brown: "bg-brown-500",
  deepOrange: "bg-deep-orange-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-600",
  lime: "bg-lime-500",
  lightGreen: "bg-light-green-500",
  green: "bg-green-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  lightBlue: "bg-light-blue-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  deepPurple: "bg-deep-purple-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  red: "bg-red-500",
};

export default function ImageCard({ color, imageUrl, title, children }) {
  return (
    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
      <Card>
        <CardImage alt="Card Image" src={imageUrl} />
        <CardBody>
          <H6 color={color}>{title}</H6>
          <Paragraph color="blueGray">{children}</Paragraph>
          <Icon name="heart" size="2xl" />
          <svg
            className="h-6 w-6 fill-current text-gray-500 hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
          </svg>
        </CardBody>
      </Card>
    </div>
  );
}
