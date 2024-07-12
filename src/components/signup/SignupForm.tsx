import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface SignupData {
  id: string;
  emailOption: string;
  password: string;
  password_confirm: string;
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<SignupData>();

  const navigate = useNavigate();
  const [emailOptions, setEmailOptions] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value;
    setValue('id', id);

    if (id.length > 0) {
      const options = [
        `${id}@naver.com`,
        `${id}@gmail.com`,
        `${id}@hanmail.net`,
      ];
      setEmailOptions(options);
    } else {
      setEmailOptions([]);
    }
  };

  const handleEmailOptionClick = (option: string) => {
    setValue('id', option);
    setEmailOptions([]);
  };

  const onSubmit = async (data) => {
    if (data.password !== data.password_confirm) {
      setError('password_confirm', {
        type: 'manual',
        message: '비밀번호가 일치하지 않습니다.',
      });
      return;
    } else {
      clearErrors('password_confirm');
    }

    try {
      const signupData: SignupData = {
        id: data.id,
        emailOption: data.id,
        password: data.password,
        password_confirm: data.password_confirm,
      };

      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        signupData,
      );

      console.log(response.data);

      navigate('/signup2', { state: signupData });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[3vh] mb-2"
          htmlFor="id"
        >
          아이디
        </label>

        <div className="flex justify-center relative">
          <input
            id="id"
            type="text"
            {...register('id', { required: '아이디를 입력해주세요.' })}
            placeholder="이메일 형식으로 작성해주세요."
            onChange={handleIdChange}
            className="w-[85%] h-[3vh] shadow appearance-none border border-black rounded py-2"
          />

          {emailOptions.length > 0 && (
            <ul className="absolute top-full w-[85%] shadow appearance-none border border-black rounded py-2 bg-white z-10">
              {emailOptions.map((option, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-blue-200"
                  onClick={() => handleEmailOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[3vh] mb-2"
          htmlFor="password"
        >
          비밀번호
        </label>
        <div className="relative flex justify-center w-[85%] h-[3vh] shadow appearance-none border border-black rounded mx-auto">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            className="w-full h-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold pl-[3vh] mb-2"
          htmlFor="password_confirm"
        >
          비밀번호 확인
        </label>
        <div className="relative flex justify-center w-[85%] h-[3vh] shadow appearance-none border border-black rounded mx-auto">
          <input
            id="password_confirm"
            type={showPassword ? 'text' : 'password'}
            {...register('password_confirm')}
            className="w-full h-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
        {errors.password_confirm && (
          <p className="text-red-500 text-xs mt-3 pl-[3vh]">
            {errors.password_confirm.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center mb-5">
        <button
          type="submit"
          className="w-[85%] h-[3vh] justify-center bg-[#C4DDF7] hover:bg-blue-200 text-black font-extrabold py-2.5 px-4 rounded-lg"
        >
          다음
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
