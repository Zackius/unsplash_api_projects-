import React from "react";
import { format } from "date-fns";
import { FcLike } from "react-icons/fc";
import {Link} from "react-router-dom"


const Image = (props) => {
  return (
    <Link to={`imagecard/${props.id}`}>
    <article className="shadow-md bg-white  rounded-3xl px-4  p-5">
      <img
        src={props.urls.full}
        alt={props.user.name}
        loading="lazy"
        className="h-52 w-full object-cover rounded-3xl "
      />

      <article className="flex items-center  flex-wrap justify-between">
        <div className="pt-5 flex items-center justify-start ">
          <img
            src={props.user.profile_image.large}
            alt={props.user.name}
            loading="lazy"
            className="w-20 rounded-full shadow"
          />
          <ul className="text-slate-600 text-sm text-right px-2">
            <li className="font-bold"> {props.user.name}</li>
            <li>{format(new Date(props.created_at), "dd MMM YYY")}</li>
          </ul>
        </div>
        <div className="text-slate-600 text-sm text-right pt-5">
          <ul>
            <a
              className="font-bold underline "
              href={`https://instagram.com/${props.user.instagram_username}`}
            >
              Instagram
            </a>
          </ul>
          <div className="flex items-center  justify-around pt-4">
            <FcLike/>
          <ul>
            {props.likes}
          </ul>
          </div>
        
        </div>
      </article>
      </article>
    </Link>
  );
};

export default Image;
