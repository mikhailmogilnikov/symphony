import Logo from '@/shared/assets/icons/logo';
import RulesIcon from '@/shared/assets/icons/rules-icon';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const Header = () => {
  return (
    <View as='header' className='my-6 py-4' items='center' justify='between'>
      <Logo />
      <View centered as='a' href='/' width='fit'>
        <RulesIcon />
        <Text className='-ml-2 text-nowrap' size='sm'>
          Правила конкурса
        </Text>
      </View>
    </View>
  );
};
