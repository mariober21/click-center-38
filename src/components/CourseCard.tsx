
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const CourseCard = ({ id, title, instructor, price, image, category, rating }: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 left-2 bg-primary/90 text-white text-xs py-1 px-2 rounded-full">
            {category}
          </div>
        </div>
        <CardContent className="pt-4">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{instructor}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {"★".repeat(Math.floor(rating))}
              {"☆".repeat(5 - Math.floor(rating))}
            </div>
            <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-0">
          <p className="font-bold text-lg">
            {price === 0 ? "Gratuito" : `R$${price.toFixed(2)}`}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
