import { Mail } from 'lucide-react';
import { InputField, InputIcon, InputRoot } from '@/components/input';

export default function Home() {
  return (
    <main>
      <div>
        <InputRoot>
          <InputIcon>
            <Mail className='size-5' />
          </InputIcon>
          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
