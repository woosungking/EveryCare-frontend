import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

interface ISignup {
  category: 'M' | 'F';
}

interface SignupData {
  id: string;
  password: string;
  name: string;
  gender: string | null;
  birth: string;
}

function SignupForm2({ category }: ISignup) {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { id, password } = location.state || {};

  useEffect(() => {
    if (id) setValue('id', id);
    if (password) setValue('password', password);
  }, [id, password, setValue]);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setSelectedGender(name);
  };

  const onSubmit = async (data) => {
    try {
      const signupData: SignupData = {
        id: data.id,
        password: data.password,
        name: data.name,
        gender: selectedGender,
        birth: data.birth,
      };
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        signupData,
      );

      console.log(response.data);
      setSignupSuccess(true);
      navigate('/login');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const inputBrith = () => {
    const input = event.target.value.replace(/-/g, '');
    let formattedValue = input;
    if (input.length > 4) {
      formattedValue = `${input.slice(0, 4)}-${input.slice(4, 6)}`;
    }
    if (input.length > 6) {
      formattedValue = `${input.slice(0, 4)}-${input.slice(4, 6)}-${input.slice(6, 8)}`;
    }
    setValue('birth', formattedValue);
    console.log(formattedValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[3vh] mb-2"
          htmlFor="name"
        >
          이름
        </label>

        <div className="flex justify-center">
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-[85%] h-[3vh] shadow appearance-none  border border-black rounded py-2 p-1"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[3vh] mb-2"
          htmlFor="gender"
        >
          성별
        </label>
        <div className="flex justify-center space-x-10">
          {category !== 'M' && (
            <button
              name="M"
              type="button"
              onClick={onClick}
              className={`w-[38%] h-[3vh] border border-black text-black py-2 px-4 rounded ${selectedGender === 'M' ? 'bg-blue-400' : 'hover:bg-blue-200'}`}
            >
              남자
            </button>
          )}
          {category !== 'F' && (
            <button
              name="F"
              type="button"
              onClick={onClick}
              className={`w-[38%] h-[3vh] border border-black text-black py-2 px-4 rounded ${selectedGender === 'F' ? 'bg-pink-400' : 'hover:bg-pink-200'}`}
            >
              여자
            </button>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[3vh] mb-2"
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
            onChange={inputBrith}
            className="w-[85%] h-[3vh] shadow appearance-none  border border-black rounded py-2 mb-6 p-1"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mb-5">
        <button
          type="submit"
          className="w-[85%] h-[3vh] justify-center bg-[#C4DDF7] hover:bg-blue-200 text-black font-extrabold py-2.5 px-4 rounded-lg"
        >
          가입하기
        </button>
      </div>

      {signupSuccess && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">회원가입을 완료했습니다!</strong>
        </div>
      )}
    </form>
  );
}

export default SignupForm2;
