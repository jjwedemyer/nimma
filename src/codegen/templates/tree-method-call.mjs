import * as b from '../ast/builders.mjs';
import internalScope from './internal-scope.mjs';
import scope from './scope.mjs';

export default function treeMethodCall(id) {
  const property = b.stringLiteral(id);
  return b.expressionStatement(
    b.callExpression(
      b.memberExpression(b.identifier('_tree'), property, true),
      [scope._, b.memberExpression(internalScope.callbacks, property, true)],
    ),
  );
}
