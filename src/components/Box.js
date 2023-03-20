export const Box = ({imageSrc, title, para}) => {
    return (
        <div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-auto">
          <img src={imageSrc} alt="girl" className="inline-block h-40 w-80" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            {title}
          </h3>
          <p className="py-2">
            {para}
          </p>
          <h4 className="py-4 text-teal-600">Tech stack</h4>
          <p className="text-gray-800 py-1">Java </p>
          <p className="text-gray-800 py-1">Python </p>
          <p className="text-gray-800 py-1">REACT </p>
        </div>
      </div>
    )
}
