import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <figure className="size-20">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium ">{price}</p>
        <XMarkIcon
          onClick={() => handleDelete(id)}
          className="text-black size-6"
        />
      </div>
    </div>
  );
};

export default OrderCard;
