import { Banner, BannerCollapseButton } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
// import { MdAnnouncement } from 'react-icons/md';

function Component() {
  return (
    <Banner>
       <div className="flex  mx-auto justify-between ">
       <div className="mx-auto flex items-center">
          <img src="https://aodour.oss-ap-southeast-1.aliyuncs.com/banner/2024-04-03/8dca0dd4-05a7-49aa-9e01-305afda059d7.gif"/>
        </div>
        <BannerCollapseButton color="gray" className="border-0 bg-transparent text-gray-500  dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </BannerCollapseButton>
      </div>
    </Banner>
  );
}
export default Component;