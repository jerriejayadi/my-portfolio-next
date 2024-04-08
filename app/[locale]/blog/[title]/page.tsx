import {
  ArrowCircleLeft,
  ArrowCircleLeft2,
  ArrowLeft,
  Back,
} from "iconsax-react";
import Navbar from "../../_components/Organisms/Navbar";
import Link from "next/link";

const BlogDetail = ({ params }: { params: { title: string } }) => {
  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-12`}>
        <div>
          <Link href={`/blog`}>
            <ArrowCircleLeft2 className={`text-gray-500 w-8 h-8`} />
          </Link>
        </div>
        <div className={`flex items-center justify-center sm:px-24`}>
          <div className={`flex flex-col gap-8`}>
            <div className="text-base opacity-50">| 4 Juli 2024</div>
            <div className="flex flex-col gap-8">
              <div className="text-4xl sm:text-5xl font-bold">Hello world</div>
              <div className="text-base leading-loose opacity-50">
                Aliquip ullamco pariatur dolor fugiat deserunt excepteur fugiat.
                Voluptate in magna velit consequat sunt deserunt in ea eu nisi
                cillum nulla fugiat. Ut cillum fugiat ut laboris sunt ad.
                Cupidatat consequat qui ut ut et. Irure occaecat exercitation
                labore id et cillum elit sit non mollit. Cillum occaecat
                adipisicing sunt elit aliquip consectetur minim esse laboris
                velit excepteur. Dolore aliquip dolore tempor pariatur cillum ad
                cupidatat eiusmod Lorem. Esse culpa exercitation eiusmod anim
                nisi id mollit amet qui excepteur. Velit sint eu occaecat sint
                velit magna velit aliqua nisi mollit tempor excepteur aute. Ex
                pariatur proident est eiusmod officia ipsum anim. Magna
                exercitation aliquip nisi reprehenderit qui consequat eiusmod
                cupidatat id. Sint tempor reprehenderit tempor excepteur velit
                fugiat.
                <br />
                <br />
                Aliquip ullamco pariatur dolor fugiat deserunt excepteur fugiat.
                Voluptate in magna velit consequat sunt deserunt in ea eu nisi
                cillum nulla fugiat. Ut cillum fugiat ut laboris sunt ad.
                Cupidatat consequat qui ut ut et. Irure occaecat exercitation
                labore id et cillum elit sit non mollit. Cillum occaecat
                adipisicing sunt elit aliquip consectetur minim esse laboris
                velit excepteur. Dolore aliquip dolore tempor pariatur cillum ad
                cupidatat eiusmod Lorem. Esse culpa exercitation eiusmod anim
                nisi id mollit amet qui excepteur. Velit sint eu occaecat sint
                velit magna velit aliqua nisi mollit tempor excepteur aute. Ex
                pariatur proident est eiusmod officia ipsum anim. Magna
                exercitation aliquip nisi reprehenderit qui consequat eiusmod
                cupidatat id. Sint tempor reprehenderit tempor excepteur velit
                fugiat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
