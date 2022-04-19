import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon, HeartIcon, RssIcon
} from "@heroicons/react/outline";

const SideBar = () => {

    return (
        <div className='text-gray-500 p-5 text-sm border-r border-gray-800'>

            {/* will refactor this later (probably not) */}
            <div className='space-y-4'>
                {/*Home button*/}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HomeIcon className='h-5 w-5'/>
                    <p>Home</p>
                </button>

                {/*Search button*/}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <SearchIcon className='h-5 w-5'/>
                    <p>Search</p>
                </button>

                {/*Library button*/}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <LibraryIcon className='h-5 w-5'/>
                    <p>Your Library</p>
                </button>

                {/*divider*/}
                <hr className='border-t-[0.1px] border-gray-900'/>

                {/*Heart/Like button*/}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <PlusCircleIcon className='h-5 w-5'/>
                    <p>Create Playlist</p>
                </button>

                {/*Create playlist button*/}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartIcon className='h-5 w-5'/>
                    <p>Liked songs</p>
                </button>

                {/*Create playlist button*/}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <RssIcon className='h-5 w-5'/>
                    <p>Your episodes</p>
                </button>

                {/*divider*/}
                <hr className='border-t-[0.1px] border-gray-900'/>

                {/*Playlist goes here...*/}

            </div>

        </div>
    )
}

export default SideBar;