// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package serverselftest.actions;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class GetApplicationURL extends CustomJavaAction<java.lang.String>
{
	private IMendixObject __Test;
	private serverselftest.proxies.SelfTestResult Test;

	public GetApplicationURL(IContext context, IMendixObject Test)
	{
		super(context);
		this.__Test = Test;
	}

	@java.lang.Override
	public java.lang.String executeAction() throws Exception
	{
		this.Test = __Test == null ? null : serverselftest.proxies.SelfTestResult.initialize(getContext(), __Test);

		// BEGIN USER CODE
		return Core.getConfiguration().getApplicationRootUrl();
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "GetApplicationURL";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
