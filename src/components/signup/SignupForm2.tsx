import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ISignup {
  category: 'Man' | 'Women';
}

function SignupForm2({ category }: ISignup) {
  const { register, handleSubmit } = useForm();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setSelectedGender(name);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[2vh] mb-2"
          htmlFor="name"
        >
          이름
        </label>

        <div className="flex justify-center">
          <input
            id="name"
            type="text"
            {...register('name')}
            className="shadow appearance-none w-[23vw] border border-black rounded py-2"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[2vh] mb-2"
          htmlFor="gender"
        >
          성별
        </label>
        <div className="flex justify-center space-x-10">
          {category !== 'Man' && (
            <button
              name="Man"
              onClick={onClick}
              className={`w-[10vw] border border-black text-black py-2 px-4 rounded ${selectedGender === 'Man' ? 'bg-blue-400' : 'hover:bg-blue-200'}`}
            >
              남자
            </button>
          )}
          {category !== 'Women' && (
            <button
              name="Women"
              onClick={onClick}
              className={`w-[10vw] border border-black text-black py-2 px-4 rounded ${selectedGender === 'Women' ? 'bg-pink-400' : 'hover:bg-pink-200'}`}
            >
              여자
            </button>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[2vh] mb-2"
          htmlFor="birth"
        >
          생년월일
        </label>
        <div className="flex justify-center">
          <input
            id="birth"
            type="text"
            {...register('birth')}
            placeholder="'YYYYMMDD' 8자리로 입력해주세요"
            className="shadow appearance-none w-[23vw] border border-black rounded py-2 mb-6"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mb-5">
        <button
          type="submit"
          className="w-[23vw] justify-center bg-[#C4DDF7] hover:bg-blue-200 text-black font-extrabold py-2.5 px-4 rounded-lg"
        >
          가입하기
        </button>
      </div>
    </form>
  );
}

export default SignupForm2;
