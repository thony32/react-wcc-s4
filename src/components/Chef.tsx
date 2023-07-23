export default function Chef() {
  return (
    <div className="h-40 relative flex items-center gap-5 lg:gap-7 2xl:gap-8 p-4 sm:p-8 border-l-4 border-dashed border-l-grey-400 rounded-l-full group">
      <svg className="absolute top-0 right-0 w-6 h-6" viewBox="0 0 30 30.000001">
        <g clipPath="url(#ed3fb0c392)">
          <path
            fill="gray"
            d="M 28.070312 29.03125 C 27.273438 29.03125 26.625 28.386719 26.625 27.585938 C 26.625 13.96875 15.546875 2.890625 1.929688 2.890625 C 1.132812 2.890625 0.484375 2.242188 0.484375 1.445312 C 0.484375 0.648438 1.132812 0 1.929688 0 C 5.652344 0 9.265625 0.726562 12.667969 2.167969 C 15.953125 3.558594 18.902344 5.546875 21.433594 8.078125 C 23.964844 10.609375 25.953125 13.5625 27.34375 16.847656 C 28.785156 20.246094 29.511719 23.859375 29.511719 27.585938 C 29.515625 28.386719 28.867188 29.03125 28.070312 29.03125 Z M 28.070312 29.03125 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </svg>
      <svg className="absolute bottom-0 right-0 w-6 h-6" viewBox="0 0 30 30.000001">
        <g clipPath="url(#a4cd3f9139)">
          <path
            fill="gray"
            d="M 0.484375 27.585938 C 0.484375 26.789062 1.132812 26.140625 1.929688 26.140625 C 15.546875 26.140625 26.625 15.0625 26.625 1.445312 C 26.625 0.648438 27.273438 0 28.070312 0 C 28.867188 0 29.515625 0.648438 29.515625 1.445312 C 29.515625 5.167969 28.789062 8.78125 27.347656 12.183594 C 25.957031 15.46875 23.96875 18.417969 21.4375 20.949219 C 18.90625 23.484375 15.953125 25.472656 12.671875 26.863281 C 9.269531 28.300781 5.65625 29.03125 1.933594 29.03125 C 1.132812 29.03125 0.484375 28.386719 0.484375 27.585938 Z M 0.484375 27.585938 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </svg>
      <div className="relative">
        <img className="z-50 rounded-full translate-y-2 group-hover:scale-125 duration-300" width="100px" src="/images/chef.png" alt="ald" />
        <img className="-z-50 absolute top-[10%]" width="100px" src="/images/circle.svg" alt="ald" />
      </div>
      <div>
        <div className="lg:text-lg 2xl:text-3xl">Chef's Recommendation</div>
        <div className="flex gap-2 lg:text-lg 2xl:text-3xl font-bold">
          See the menu types
          <svg viewBox="0 0 75 37.5" className="w-9 h-9 group-hover:translate-x-2 duration-300">
            <g clipPath="url(#9ff828e112)">
              <path
                fill="#000000"
                d="M 30.320312 0.0390625 L 48.644531 18.441406 L 30.191406 36.972656 L 26.441406 33.203125 L 41.140625 18.441406 L 26.566406 3.808594 L 30.320312 0.0390625 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
            <g clipPath="url(#3ea57380e6)">
              <path
                fill="#000000"
                d="M 46.914062 17.792969 L 27.253906 17.792969 C 26.867188 17.792969 26.550781 18.121094 26.550781 18.53125 C 26.550781 18.941406 26.867188 19.273438 27.253906 19.273438 L 46.914062 19.273438 C 47.300781 19.273438 47.617188 18.941406 47.617188 18.53125 C 47.617188 18.121094 47.300781 17.792969 46.914062 17.792969 Z M 46.914062 17.792969 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
