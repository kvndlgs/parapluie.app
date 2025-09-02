import Android  from '@/components/magicui/android';

export const Display = () => {
    return (
        <div className="flex items-center justify-center py-38 bg-gradient-to-b from-white via-crime-50/90 to-white">
            <div className='flex flex-col'>
            <div className="py-20 mx-auto">
                <h2 className="text-3xl leading-tight font-serif mx-auto font-[400] text-grape-800"> Designed with YOU in Mind </h2>
            </div>
            <Android className="width-full mx-auto mt-10" />
            </div>
        </div>
    )
}