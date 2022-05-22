import { Container, PageHeaderText, RefreshButton } from './styles';
import { FontAwesome } from '@expo/vector-icons';

interface HomePageHeaderProps {
  title: string;
  refreshFunction: () => void;
}

export default function HomePageHeader({
  title,
  refreshFunction,
}: HomePageHeaderProps) {
  return (
    <Container>
      <PageHeaderText>{title}</PageHeaderText>
      <RefreshButton onPress={refreshFunction}>
        <FontAwesome name="refresh" size={22} color="black" />
      </RefreshButton>
    </Container>
  );
}
