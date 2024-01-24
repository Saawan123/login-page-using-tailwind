import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}:any){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-24 w-24"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZBGL2TqWehzG3yqye6OdEp4FARusr0Z6hfE_wwuEGA&s"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}