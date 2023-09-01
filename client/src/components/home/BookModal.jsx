import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={e => e.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>

        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-400 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-400 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>

        <p className="mt-4">Anything you want show</p>
        <p className="my-2">
          Голомт банк шинэ үеийн харилцагчдадаа зориулсан GenZ Loyalty оноотой
          урамшуулалт аяныг 2023.12.31-нийг дуустал хэрэгжүүлж байгаа билээ. Энэ
          аяны хүрээнд 7-26 насны хүүхэд, залуус The Color Card болон SocialPay
          ашиглах бүрдээ оноо цуглуулж, цуглуулсан оноогоороо сонгогдсон
          байгууллагуудын хөнгөлөлтийн купоноос авах боломжтой юм.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
