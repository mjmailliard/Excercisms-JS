export const steps = (int) => {
  if (int < 1) { throw new Error('Only positive numbers are allowed') }
  let count = 0;
  let current = int
  while( current > 1){
    if( current % 2 === 0) { current /= 2, count++ }
      else if ( current % 2 > 0 ) { current = (current * 3) + 1, count++ }
  }
  return count
};
