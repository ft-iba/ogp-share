type ShareXOptions = {
  url: string;
  text?: string;
  hashtags?: string | string[];
};

export const onShareX = ({
  url,
  text = '',
  hashtags
}: ShareXOptions): void => {
  const intent = new URL('https://twitter.com/intent/tweet');

  intent.searchParams.set('url', url);

  if (text) {
    intent.searchParams.set('text', text);
  }

  if (hashtags) {
    const tagString = Array.isArray(hashtags) ? hashtags.join(',') : hashtags;
    intent.searchParams.set('hashtags', tagString);
  }

  window.open(
    intent.toString(),
    'share',
    'width=550,height=450,location=yes,resizable=yes,toolbar=no,menubar=no,scrollbars=no,status=no'
  );

  // ポップアップブロック対策
  // if (!shareWindow) {
  //   window.location.href = intent.toString();
  // }
};